import PropTypes from "prop-types";

import loginRightBanner from "../../assets/login-right-panel.svg";
import { Typography } from "antd";

const defaultUnstractContent = {
  title: "UNLOCK VALUE FROM UNSTRUCTURED DATA.",
  description:
    "Hams-trac is a platform that lets you automate even the most complex workflows involving unstructured data, saving you time, money, and automation headaches.",
};

function ProductContentLayout({ title, description, image }) {
  return (
    <div className="right-section-text-wrapper">
      <div className="right-title-cover">
        <Typography.Title className="right-section-title">
          {title || defaultUnstractContent.title}
        </Typography.Title>
      </div>
      <div className="right-subtitle-cover">
        <Typography align="center" className="right-subtitle">
          {description || defaultUnstractContent.description}
        </Typography>
      </div>
    </div>
  );
}

ProductContentLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.any,
};

export { ProductContentLayout };
