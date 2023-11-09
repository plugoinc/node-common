import { PubSub } from '@google-cloud/pubsub';
import { createPubSubTopics } from './pubsub.util';

const pubsubConfig = {
  projectId: 'staging-321303',
  apiEndpoint: '0.0.0.0:9086',
};

describe('PubSubUtil', () => {
  let pubsub: PubSub;
  beforeAll(() => {
    pubsub = new PubSub(pubsubConfig);
    pubsub.isEmulator = true;
  });

  it('should create 2 topics', async () => {
    const topics = ['topic1', 'topic2'];

    const res = await createPubSubTopics(topics, pubsubConfig);
    expect(res).toHaveLength(2);
  });

  afterAll(async () => {
    const [topics] = await pubsub.getTopics();
    await Promise.all(topics.map((topic) => topic.delete()));
  });
});
