"use client";

import Carousel from "@/components/Carousel";
import ChatPublic from "@/components/ChatPublic";
import FilterSortAndSearch from "@/components/Filter-Sort-Search";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function PackagePage() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const limit = 8;

  const handleOnChangeSearch = (event) => {
    setSearchQuery(event.currentTarget.value);
  };

  const handleOnChangeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const handleOnChangeSort = (event) => {
    setSort(event.currentTarget.value);
  };

  const handleOnClickSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          "/package?search=" +
          searchQuery +
          "&filter=" +
          filter +
          "&sort=" +
          sort,
        {
          cache: "no-store",
        }
      );
      const result = await response.json();

      setData(result.packages);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPackages = async () => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL +
          `/package?page=${currentPage}&limit=${limit}&filter=${filter}&sort=${sort}`,
        {
          cache: "no-store",
        }
      );
      const result = await response.json();
      setCurrentPage(currentPage + 1);
      setData((prevData) => [...prevData, ...result.packages]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, [filter, sort]);

  useEffect(() => {
    const searchPackages = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_BASE_URL +
            "/package?search=" +
            searchQuery +
            "&category=" +
            filter +
            "&sortByPrice=" +
            sort,
          {
            cache: "no-store",
          }
        );
        const result = await response.json();

        setData(result.packages);
      } catch (error) {
        console.log(error);
      }
    };

    searchPackages();
  }, [searchQuery, filter, sort]);

  return (
    <>
      <Carousel />
      <ChatPublic />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="p-10 w-screen">
          <div className="flex justify-between items-center h-1/4 mb-5">
            <h1 className="text-4xl font-bold">
              Make Your Dream Wedding Come True
            </h1>
            {/* <FilterSortAndSearch /> */}
            <div className="navbar-end join flex justify-end mr-5">
              <div>
                <div>
                  <input
                    type="text"
                    className="input input-bordered join-item"
                    placeholder="Search"
                    onChange={handleOnChangeSearch}
                    value={searchQuery}
                  />{" "}
                </div>
              </div>
              <select
                value={filter}
                onChange={handleOnChangeFilter}
                className="select select-bordered join-item"
              >
                <option value={""}>-- Filter --</option>
                <option value={"VIP"}>VIP</option>
                <option value={"Reguler"}>Regular</option>
              </select>
              <select
                value={sort}
                onChange={handleOnChangeSort}
                className="select select-bordered join-item"
              >
                <option value={""}>-- Sort By Price --</option>
                <option value={1}>Cheap</option>
                <option value={-1}>Expensive</option>
              </select>
            </div>
          </div>
          <InfiniteScroll
            className="py-5 w-full h-[720px] flex flex-wrap gap-5 flex justify-start items-center"
            dataLength={data.length}
            next={fetchPackages}
            hasMore={data.length % limit == 0}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
            }}
            loader={
              <span className="loading loading-spinner loading-lg"></span>
            }
            scrollableTarget="scrollableDiv"
            endMessage={
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "10px",
                  background: "#D81B60",
                }}
              >
                <b>Yay! You have seen it all</b>
              </div>
            }
          >
            {data.map((packageData, i) => {
              return <PackageCard key={i} packageData={packageData} />;
            })}
          </InfiniteScroll>
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </>
  );
}
