import React from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ThreeCardSwiper from "../../../components/ThreeCardSwiper";
import TwoCardSwiper from "../../../components/TwoCardSwiper";

export default function MultiCards() {
  return (
    <div className="overflow-hidden sm:block hidden">
      <div className="w-[86%] mx-auto mt-8">
        <Tabs>
          <TabList>
            <Tab>
              <p className="2xl:text-2xl text-sm font-medium">Новинки</p>
            </Tab>
            <Tab>
              <p className="2xl:text-2xl text-sm text-gray-500">Популярное</p>
            </Tab>
          </TabList>
          <TabPanel>
            <ThreeCardSwiper/>
            <TwoCardSwiper/>
          </TabPanel>
          <TabPanel>
            <ThreeCardSwiper/>
            <TwoCardSwiper/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
