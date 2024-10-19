import React from "react";


const PopularCategory = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-12 px-6 mb-20">
      <h2 className="md:text-3xl text-2xl font-semibold mb-5 mt-10">Most Popular Vacancies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            category.map(({name, id, count}) => (
                <div key={id}>
                    <p className="text-lg text-[#18191C]">{name}</p>
                    <p className="text-sm text-[#767F8C]">{count}</p>
                </div>
            ))
        }
      </div>

    </div>
  );
};

export default PopularCategory;
