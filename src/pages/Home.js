import React from 'react';
import Header from '../components/Header/Header';
import AddressSearch from '../components/AddressSearch/AddressSearch';
import AllProviders from '../components/AllProviders/AllProviders';
import SelectionSection from '../components/SelectionSection/SelectionSection';

import Main from '../components/Main/Main';

import '../styles/global.scss';
import ApplicationForm from "../components/ApplicationForm/ApplicationForm";
import HowToConnect from "../components/HowToConnect/HowToConnect ";
import QuestionCard from "../components/QuestionCard/QuestionCard";
import Question from "../components/Question/Question";
import Footer from "../components/Footer/Footer";


const Home = () => {
    return (
        <div>
            <Header />

            <main>
                <Main/>
                <AddressSearch />
                 <AllProviders />
                <SelectionSection/>
                <ApplicationForm/>
                <HowToConnect/>
                <QuestionCard/>
                <ApplicationForm/>
                <Footer/>

            </main>

        </div>
    );
};

export default Home;