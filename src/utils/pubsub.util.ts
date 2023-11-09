import { PubSub } from '@google-cloud/pubsub';

/**
 *
 * @param topics list of topics to create
 * @param pubsubConfig configuration for pubsub client
 * @param pubsubConfig.projectId project id
 * @param pubsubConfig.apiEndpoint pubsub emulator endpoint
 *
 * @returns list of created topics
 */
export async function createPubSubTopics(
  topics: string[],
  pubsubConfig: {
    projectId: string;
    apiEndpoint: string;
  },
) {
  console.log('start creating pubsub topics');

  try {
    const client = new PubSub({
      projectId: pubsubConfig.projectId,
      apiEndpoint: pubsubConfig.apiEndpoint,
    });
    client.isEmulator = true;

    const [alreadyCreatedTopics] = await client.getTopics();

    const topicsToCreate = topics.filter(
      (topic) =>
        !alreadyCreatedTopics.find(
          (alreadyCreatedTopic) => alreadyCreatedTopic.name === topic,
        ),
    );

    const createdTopics = await Promise.all(
      topicsToCreate.map(async (name) => {
        const [topic] = await client.createTopic(name);
        return topic;
      }),
    );

    console.log(
      'created topics',
      createdTopics.map((topic) => topic.name),
    );

    return createdTopics;
  } catch (error) {
    console.error('error creating pubsub topics', error);
  }
}
