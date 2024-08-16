import React from "react";
import styled from "styled-components";

import JobsListCom from "../components/AllJobsPage/JobsListCom";
import SearchAndFilter from "../components/AllJobsPage/SearchAndFilter";
import Banner from "../components/AllJobsPage/Banner";

import Navbar from "../components/shared/Navbar";
import PaginationCom from "../components/AllJobsPage/PaginationCom";
import Home from "../pages/Home";

const AllJobs = () => {
    return (
        <>
            <Navbar />
            <Wrapper>
                <SearchAndFilter />
                <JobsListCom />
                <PaginationCom />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    padding: 2rem 1.5rem;
    width: 100%;
    margin: 0 auto;
`;
export default AllJobs;
