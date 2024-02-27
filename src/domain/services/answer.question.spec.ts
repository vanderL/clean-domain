import { expect, test } from 'vitest'
import { AnswerQuestionService } from './answer-question'
import { AnswersRepository } from '../repositories/answer-respository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository ={
  create: async (answer: Answer) => {
    return;
  }
}

test('create an answe', async () => {
  const answerQuestion = new AnswerQuestionService(fakeAnswersRepository)

  const answer = await answerQuestion.execute({
    content: 'Nova resposta',
    instructorId: '1',
    questionId: '2'
  })

  expect(answer.content).toEqual('Nova resposta')
})