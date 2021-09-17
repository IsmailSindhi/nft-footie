import React, { useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Profile.module.sass";
import Icon from "../../components/Icon";
import User from "./User";
import Items from "./Items";
import Followers from "./Followers";

// data
import { bids } from "../../mocks/profile";
import { isStepDivisible } from "react-range/lib/utils";

const navLinks = [
  "On Sale",
  "Collectibles",
  "Created",
  "Likes",
  "Following",
  "Followers",
];

const socials = [
  {
    title: "twitter",
    url: "https://twitter.com/ui8",
  },
  {
    title: "instagram",
    url: "https://www.instagram.com/ui8net/",
  },
  {
    title: "facebook",
    url: "https://www.facebook.com/ui8.net/",
  },
];

const following = [
  {
    name: "Sally Fadel",
    counter: "161 followers",
    avatar: "./images/icons/icon49.png",
    // url: "",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Aniya Harber",
    counter: "161 followers",
    avatar: "./images/icons/icon54.png",
    // url: "",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Edwardo Bea",
    counter: "161 followers",
    avatar: "./images/icons/icon53.png",
    // url: "",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Reymundo",
    counter: "161 followers",
    avatar: "./images/icons/icon52.png",
    // url: "",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Jeanette",
    counter: "161 followers",
    avatar: "./images/icons/icon51.png",
    // url: "",
    buttonClass: "stroke",
    buttonContent: "Unfollow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
];

const followers = [
  {
    name: "Sally Fadel",
    counter: "161 followers",
    avatar: "./images/icons/icon48.png",
    // url: "",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Aniya Harber",
    counter: "161 followers",
    avatar: "./images/icons/icon47.png",
    // url: "",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Edwardo Bea",
    counter: "161 followers",
    avatar: "./images/icons/icon46.png",
    // url: "",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Reymundo",
    counter: "161 followers",
    avatar: "./images/icons/icon45.png",
    // url: "",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
  {
    name: "Jeanette",
    counter: "161 followers",
    avatar: "./images/icons/icon44.png",
    // url: "",
    buttonClass: "blue",
    buttonContent: "Follow",
    gallery: [
      "./images/content/pic1.png",
      "./images/content/pic2.png",
      "./images/content/pic3.png",
      "./images/content/pic4.png",
    ],
  },
];

const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.profile}>
      <div
        className={cn(styles.head, { [styles.active]: visible })}
        style={{
          backgroundImage: "url(./images/content/bg-profile.jpg)",
        }}
      >
        <div className={cn("container center-1200", styles.container)}>
          <div className={styles.btns}>
            <button
              className={cn("button-stroke button-small", styles.button)}
              onClick={() => setVisible(true)}
            >
              <span>Edit cover photo</span>
              <Icon name="edit" size="16" />
            </button>
            <Link
              className={cn("button-stroke button-small", styles.button)}
              to="profile-edit"
            >
              <span>Edit profile</span>
              <Icon name="image" size="16" />
            </Link>
          </div>
          <div className={styles.file}>
            <input type="file" />
            <div className={styles.wrap}>
              <Icon name="upload-file" size="48" />
              <div className={styles.info}>Drag and drop your photo here</div>
              <div className={styles.text}>or click to browse</div>
            </div>
            <button
              className={cn("button-small", styles.button)}
              onClick={() => setVisible(false)}
            >
              Save photo
            </button>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <div className={cn("container center-1200", styles.container)}>
          <User className={styles.user} item={socials} />
          <div className={styles.wrapper}>
            <div className={styles.nav}>
              {navLinks.map((x, index) => (
                <button
                  className={cn(styles.link, {
                    [styles.active]: index === activeIndex,
                  })}
                  key={index}
                  onClick={() => setActiveIndex(index)}
                >
                  {x}
                </button>
              ))}
            </div>
            <div className={styles.group}>
              <div className={styles.item}>
                {activeIndex === 0 && (
                  <Items class={styles.items} items={bids.slice(0, 3)} />
                )}
                {activeIndex === 1 && (
                  <Items class={styles.items} items={bids.slice(3, 5)} />
                )}
                {activeIndex === 2 && (
                  <Items class={styles.items} items={bids.slice(5, 9)} />
                )}
                {activeIndex === 3 && (
                  <Items class={styles.items} items={bids.slice(9, 14)} />
                )}
                {activeIndex === 4 && (
                  <Followers className={styles.followers} items={following} />
                )}
                {activeIndex === 5 && (
                  <Followers className={styles.followers} items={followers} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
