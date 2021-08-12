//Your cod:
const getJson = url => fetch(url).then(res => res.json());

getJson("/i/1.json")
  .then(json => {
    if (json.key) {
      return getJson("/i/2.json");
    }
    throw new Error("No key");
  })
  .then(json => {
    return json.key2;
  })
  .catch(error => {
    console.error(error);
  });

//My cod:
const getJson = async url => {
  let res = await fetch(url);
  let json = await res.json();
  return json;
};

(async () => {
  var json = await getJson("/i/1.json");
  if (json.key) {
    json = await getJson("/i/2.json");
  } else {
    throw new Error("No key");
  }
  return json.key2;
})().catch(error => {
  console.error(error);
});
