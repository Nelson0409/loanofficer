import { chatFlow } from '@/ai/chatFlow';
import { appRoute } from '@genkit-ai/next';

export const POST = appRoute(chatFlow);
