export function generateFakeData(count) {
  const fakeData = [];
  for (let i = 0; i < count; i++) {
    fakeData.push({
      id: i + 1,
      url: `photos/${i + 1}.jpg`,
      description: `Описание фотографии #${i + 1}`,
      likes: Math.floor(Math.random() * 200) + 15,
      comments: Math.floor(Math.random() * 20),
    });
  }
  return fakeData;
}
