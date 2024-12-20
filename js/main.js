// --- Вспомогательные данные ---

const descriptions = [
  'Красивый пейзаж',
  'Закат на пляже',
  'Горы вдалеке',
  'Уютное кафе',
  'Прекрасный закат',
];

const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = ['Артём', 'Ольга', 'Иван', 'Екатерина', 'Дмитрий', 'Мария'];

// --- Вспомогательные функции ---

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayElement = (array) => array[getRandomInt(0, array.length - 1)];

// --- Генерация комментариев ---

const generateComments = (count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push({
      id: getRandomInt(1, 1000),
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomArrayElement(commentMessages),
      name: getRandomArrayElement(names),
    });
  }
  return comments;
};

// --- Генерация фотографий ---

const generatePhoto = (id) => {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(descriptions),
    likes: getRandomInt(15, 200),
    comments: generateComments(getRandomInt(0, 30)),
  };
};

// --- Генерация массива фотографий ---

const generateFakeData = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    photos.push(generatePhoto(i));
  }
  return photos;
};

// Генерируем 25 объектов
const fakeData = generateFakeData(25);
console.log(fakeData);
