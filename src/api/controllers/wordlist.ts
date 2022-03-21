import wordlist from "../helper/worlist.json";

export const getWord = (req, res) => {
  const length = wordlist.length;
  const index = Math.floor(Math.random() * length);
  res.send(wordlist[index]);
};
