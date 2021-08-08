import React, { useState, useEffect } from 'react';
import { loadUsers } from '../../api';
// переписать с использованием хуков состояния и эффекта
function UsersLoaderH () {
  const [users, setUsers] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const load = () => {
    setIsFetching(true);

    loadUsers({ page: currentPage })
      .then(data => {
        setUsers(data.results);
      })
      .catch(error => {
        setIsError(true);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    load();
  }, [currentPage]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {isError && <div>!!!ERROR!!!</div>}
      {isFetching && <div>Loading...</div>}
      {/* Реализовать обработчики */}
      <button onClick={prevPage}>{'<'}</button>
      <button onClick={nextPage}>{'>'}</button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{JSON.stringify(user)}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersLoaderH;
