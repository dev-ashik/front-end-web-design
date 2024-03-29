import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

import AddCardIcon from "@mui/icons-material/AddCard";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import MessageIcon from '@mui/icons-material/Message';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

import { Divider } from "@mui/material";

const Sidebar = () => {
  return (
    <div>
      <Link to="/" className={styles.link}>
        <HomeIcon className={styles.linkIcon} />
        <span className={styles.linkName}>Home</span>
      </Link>

      {/* A start */}

      {/* A end */}
      {/* B start */}

      {/* B end */}
      {/* C start */}
      <Link to="/grid-card" className={styles.link}>
        <ViewQuiltIcon className={styles.linkIcon} />
        <span className={styles.linkName}>grid-card</span>
      </Link>
      {/* C end */}
      {/* D start */}
      {/* D end */}
      {/* E start */}
      {/* E end */}
      {/* F start */}

      {/* F end */}
      {/* G start */}

      {/* G end */}
      {/* H start */}

      {/* H end */}
      {/* I start */}

      {/* I end */}
      {/* J start */}

      {/* J end */}
      {/* K start */}

      {/* K end */}
      {/* L start */}

      {/* L end */}
      {/* M start */}
      <Link to="/modal" className={styles.link}>
        <AddToPhotosIcon className={styles.linkIcon} />
        <span className={styles.linkName}>Modal</span>
      </Link>
      <Link to="/shortTimeMessage" className={styles.link}>
        <MessageIcon className={styles.linkIcon} />
        <span className={styles.linkName}>short time message</span>
      </Link>
      {/* M end */}
      {/* N start */}
      <Link to="/navigation" className={styles.link}>
        <AddCardIcon className={styles.linkIcon} />
        <span className={styles.linkName}>Navbar</span>
      </Link>
      {/* N end */}
      {/* O start */}

      {/* O end */}
      {/* P start */}

      {/* P end */}
      {/* Q start */}

      {/* Q end */}
      {/* R start */}

      {/* R end */}
      {/* S start */}
      <Link to="/slider" className={styles.link}>
        <CompareArrowsIcon className={styles.linkIcon} />
        <span className={styles.linkName}>Slider</span>
      </Link>
      {/* S end */}
      {/* T start */}
      <Link to="/toggle-button" className={styles.link}>
        <ToggleOnIcon className={styles.linkIcon} />
        <span className={styles.linkName}>Boggle Button</span>
      </Link>
      {/* T end */}
      {/* U start */}

      {/* U end */}
      {/* V start */}

      {/* V end */}
      {/* W start */}

      {/* W end */}
      {/* X start */}

      {/* X end */}
      {/* Y start */}

      {/* Y end */}
      {/* Z start */}

      {/* Z end */}

      <Divider className={styles.divider} />

      <Link to="/test" className={styles.link}>
        <PrecisionManufacturingIcon className={styles.linkIcon} />
        <span className={styles.linkName}>test</span>
      </Link>
    </div>
  );
};

export default Sidebar;
