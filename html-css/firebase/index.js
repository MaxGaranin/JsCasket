import { Question } from './questions.js';
import { authWithEmailAndPassword } from './auth.js';

const input = document.getElementById('questionText');
const list = document.getElementById('questionsList');

const submitBtn = document.getElementById('addQuestionBtn');
submitBtn.addEventListener('click', () => {
  const questionText = input.value;
  if (!questionText) return;

  const question = {
    text: questionText.trim(),
    date: new Date().toJSON()
  }

  submitBtn.disabled = true;

  Question.create(question).then(() => {
    input.value = '';
    input.className = '';
    submitBtn.disabled = false;
  });
})

const readBtn = document.getElementById('readQuestionsBtn');
readBtn.addEventListener('click', () => {
  Question.fetch('token').then((questions) => {
    const lis = questions.map((question) => {
      return `<li>${question.text}</li>`;
    });

    list.innerHTML = lis.join('');
  });
});

const authBtn = document.getElementById('authBtn');
authBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  authWithEmailAndPassword(email, password).then((id) => {
    console.log(`Id = ${id}`);
  });
});
