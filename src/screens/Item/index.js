import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";

const navLinks = ["Info", "Owners", "History", "Bids"];

const categories = [
  {
    category: "black",
    content: "art",
  },
  {
    category: "purple",
    content: "unlockable",
  },
];

const users = [
  {
    name: "Julie P. Graves",
    position: "Owner",
    avatar: "./images/icons/icon10.png",
    reward: "./images/content/reward-1.svg",
  },
  {
    name: "Vicki R. Villa",
    position: "Creator",
    avatar: "./images/icons/icon2.png",
  },
];

const usersOwners = [
  {
    name: "Scott M. Herring",
    position: "Owner",
    avatar: "./images/icons/icon3.png",
    // reward: "./images/content/reward-1.svg",
  },
];

const usersHistory = [
  {
    name: "Julie P. Graves",
    position: "Place a bid: 1.46 BNB",
    avatar: "./images/icons/icon4.png",
    reward: "./images/content/reward-1.svg",
  },
  {
    name: "Lisa E. Lyles",
    position: "Put Footie Digital Art on sale",
    avatar: "./images/icons/icon5.png",
    reward: "./images/content/reward-1.svg",
  },
  {
    name: "Donald I. Andrews",
    position: "Accepted Julie P. Graves's bid",
    avatar: "./images/icons/icon6.png",
    reward: "./images/content/reward-1.svg",
  },
];

const usersBids = [
  {
    position: "Highest bid: 1.46 BNB",
    name: "Julie P. Graves",
    avatar: "./images/icons/icon7.png",
    reward: "./images/content/reward-1.svg",
  },
  {
    position: "#2",
    name: "Darek L. Adams",
    avatar: "./images/icons/icon8.png",
    // reward: "./images/content/reward-1.svg",
  },
  {
    position: "#3",
    name: "Wade R. Walker",
    avatar: "./images/icons/icon9.png",
    // reward: "./images/content/reward-1.svg",
  },
];

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
                {categories.map((x, index) => (
                  <div
                    className={cn(
                      { "status-black": x.category === "black" },
                      { "status-purple": x.category === "purple" },
                      styles.category
                    )}
                    key={index}
                  >
                    {x.content}
                  </div>
                ))}
              </div>
              <img
                srcSet="./images/content/pic9.png 2x"
                src="./images/content/pic9.png"
                alt="Item"
              />
            </div>
            <Options className={styles.options} />
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>Footie Digital Art</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                2.5 BNB
              </div>
              <div className={cn("status-stroke-black", styles.price)}>
                $4,429.87
              </div>
              <div className={styles.counter}>10 in stock</div>
            </div>
            <div className={styles.info}>
              This NFT Card will give you Access to Special Airdrops. To learn
              more about UI8 please visit<br />{" "}
              <a
                href="https://footie.plus/"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://footie.plus/
              </a>
            </div>
            
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))}
            </div>
            <div>
                {activeIndex === 1 && (
                  <Users className={styles.users, "mb-5"} items={usersOwners} />
                )}
                {activeIndex === 2 && (
                  <Users className={styles.users, "mb-5"} items={usersHistory} />
                )}
                {activeIndex === 3 && (
                  <Users className={styles.users, "mb-5"} items={usersBids} />
                )}
                {activeIndex === 0 && (
                  <Users className={styles.users, "mb-5"} items={users} />
                )}
            </div>
            
            {/* <Users className={styles.users, "mb-5"} items={users} /> */}
            <Control className={styles.control} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
