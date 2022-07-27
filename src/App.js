import { useFetchData } from './hooks/useFetchData';
import List from './components/List/List';
import classes from './App.module.css';
function App() {
  const { loading, data, error } = useFetchData('./assets/data.csv');

  return (
    <div className={classes.container}>
      {loading && <span>Loading.....</span>}
      {!loading && error && <span>Error in fetching data ...</span>}
      {data && <List data={data} />}
    </div>
  );
}

export default App;
