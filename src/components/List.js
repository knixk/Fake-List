import InfiniteScroll from "react-infinite-scroll-component";
import Item from "./Item";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Spinner from "./Spinner";
import { nanoid } from "nanoid";

const List = (props) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const { isLoggedIn, setIsLoggedIn } = props;

  // function to fetch data
  const fetchData = async () => {
    setLoading(true);
    const fetchCall = await (
      await fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
    ).json();

    const newData = fetchCall.results;

    setPage((prev) => prev + 1);
    setData(newData);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <>
          <Navbar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <div className="list-container">
            {isLoggedIn === true ? (
              <div className="list">
                {data && (
                  <InfiniteScroll
                    key={nanoid()}
                    className="is"
                    dataLength={page * 10}
                    next={() => {
                      setTimeout(() => {
                        fetchData();
                      }, 1000);
                    }}
                    loader={""}
                    hasMore={true}
                  >
                    {data.map((i) => {
                      return (
                        <Item
                          cell={i.cell}
                          email={i.email}
                          image={i.picture.medium}
                          key={nanoid()}
                          name={i.name.first}
                        />
                      );
                    })}
                  </InfiniteScroll>
                )}
              </div>
            ) : (
              <h2>You aren't authorized!</h2>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
