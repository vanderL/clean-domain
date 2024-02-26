import {expect, test} from 'vitest'
import { AnswerQuestionService } from './answer-question'

test('create an answe', () => {
  const answerQuestion = new AnswerQuestionService()

  const answer = answerQuestion.execute({
    content: 'Nova resposta',
    instructorId: '1',
    questionId: '2'
  })

  expect(answer.content).toEqual('Nova resposta')
})