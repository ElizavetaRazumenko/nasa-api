import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import SearchForm from "@/components/searchForm/searchForm";
import getConvertDateInfo from "@/utils/getConvertDateInfo";
import router from "next/router";
import { GetServerSidePropsContext, GetServerSideProps } from "next";
import getHomePropsData from "@/utils/getHomePropsData";

interface PicturesData {
  id: string;
  date: string;
  url: string;
}

export interface HomeProps {
  picturesData: PicturesData[] | null;
  errorMessage: string | null;
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { date, start_date, end_date } = context.query;
  const propsData = await getHomePropsData({ date, start_date, end_date });

  return {
    props: propsData,
  };
};

export default function Home({ picturesData, errorMessage }: HomeProps) {
  const [inputDate, setInputDate] = useState<string | null>(null);

  const setQueryParams = async () => {
    const convertDateInfo = getConvertDateInfo(inputDate);
    router.push(
      convertDateInfo.start_date
        ? `?start_date=${convertDateInfo.start_date}&end_date=${convertDateInfo.end_date}`
        : `?date=${convertDateInfo.date}`
    );
  };

  useEffect(() => {
    setQueryParams();
  }, [inputDate]);

  return (
    <>
      <Head>
        <title>Nasa App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${styles.flex_column}`}>
        <h1>Astronomy Picture of the Day</h1>
        <p>
          Select a date (YYYY-MM-DD) or date range (YYYY-MM-DD - YYYY-MM-DD):
        </p>

        <SearchForm setInputDate={setInputDate} />

        <div className={styles.picture_container}>
          {picturesData &&
            picturesData.length &&
            picturesData.map((data) => (
              <div key={data.id} className={styles.flex_column}>
                <p>{data.date}</p>
                <img
                  className={styles.picture}
                  src={data.url}
                  alt="Picture of the Day"
                />
              </div>
            ))}
        </div>

        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </main>
    </>
  );
}
