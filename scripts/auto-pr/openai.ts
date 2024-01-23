import OpenAI from 'openai';
import {getCommits} from './github';

// Call OpenAI API to summarize the commit messages
const openaiApiKey = process.env.OPENAI_API_KEY; // Set your OpenAI API key in the environment variable

if (!openaiApiKey) {
  console.error(
    'OpenAI API key not found. Set the OPENAI_API_KEY environment variable.'
  );
  // eslint-disable-next-line no-process-exit
  process.exit(1);
}

// const openaiClient = new OpenAI.OpenAI({key: openaiApiKey});
const openaiClient = new OpenAI({
  apiKey: openaiApiKey, // This is the default and can be omitted
});

export const getOpenAiRes = async () => {
  const commits = await getCommits();
  const prompt = `Summarize the following commit messages in 3 to 4 bullet points:\n\n${commits}`;
  try {
    const chatCompletion = await openaiClient.chat.completions.create({
      messages: [{role: 'user', content: prompt}],
      model: 'gpt-3.5-turbo',
    });

    // Extract the generated response from the choices array
    const generatedResponse = chatCompletion.choices[0].message.content;
    return generatedResponse;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
  }
};
