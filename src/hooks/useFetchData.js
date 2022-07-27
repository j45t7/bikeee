import { useState, useEffect } from 'react';
import axios from 'axios';
export const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        const data = await response.data;

        const convertedDataToObj = convertCSVFile(data);

        const formattedData = formatData(convertedDataToObj);

        const countedModels = countModelsOccurrence(formattedData);

        const popularModels = getThreeMostPopularModels(countedModels);

        setData(popularModels);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
};

const convertCSVFile = (data) => {
  const rows = data?.split('\n').slice(1);
  const formattedCSV = rows?.map((el) => {
    let row = el.split(',');
    return { id: row[0], make: row[1], model: row[2] };
  });

  return formattedCSV;
};

const formatData = (data) => {
  return data?.map((item) => {
    const separator = ' ';
    const resultModel = item.model
      .match(/[a-z]+|\d+/gi)
      .join(separator)
      .toLowerCase();
    const resultMake = item.make
      .match(/[a-z]+|\d+/gi)
      .join(separator)
      .toLowerCase();

    return { id: item.id, make: resultMake, model: resultModel };
  });
};

const countModelsOccurrence = (data) => {
  return Object.values(
    data?.reduce((obj, item) => {
      obj[item.model] = obj[item.model] || {
        id: item.id,
        make: item.make,
        model: item.model,
        total: 0,
      };
      obj[item.model].total++;
      return obj;
    }, {})
  );
};

const getThreeMostPopularModels = (data) => {
  return Object?.values(data)
    .sort((a, b) => b.total - a.total)
    .slice(0, 3);
};
