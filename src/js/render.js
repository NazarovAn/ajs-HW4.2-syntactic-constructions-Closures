import results from './app';
import findBy from './findBy';

const sortList = document.querySelector('.sort_list');
const resultList = document.querySelector('.result_list');
const inputName = document.querySelector('.name');
const inputType = document.querySelector('.type');
const inputDescription = document.querySelector('.description');

results.forEach((item) => {
  sortList.insertAdjacentHTML('beforeend',
    `<li class="list_item">
  Название: <strong>${item.name}</strong>, тип: <strong>${item.type}</strong> , описание: <strong>${item.description}</strong>
  </li>`);
});

inputName.addEventListener('input', () => {
  resultList.innerHTML = '';
  results.filter(findBy('name', inputName.value)).forEach((item) => {
    resultList.insertAdjacentHTML('beforeend',
      `<li class="list_item">
    Название: <strong>${item.name}</strong>, тип: <strong>${item.type}</strong> , описание: <strong>${item.description}</strong>
    </li>`);
  });
});

inputType.addEventListener('input', () => {
  resultList.innerHTML = '';
  results.filter(findBy('type', inputType.value)).forEach((item) => {
    resultList.insertAdjacentHTML('beforeend',
      `<li class="list_item">
    Название: <strong>${item.name}</strong>, тип: <strong>${item.type}</strong> , описание: <strong>${item.description}</strong>
    </li>`);
  });
});

inputDescription.addEventListener('input', () => {
  resultList.innerHTML = '';
  results.filter(findBy('description', inputDescription.value)).forEach((item) => {
    resultList.insertAdjacentHTML('beforeend',
      `<li class="list_item">
    Название: <strong>${item.name}</strong>, тип: <strong>${item.type}</strong> , описание: <strong>${item.description}</strong>
    </li>`);
  });
});
