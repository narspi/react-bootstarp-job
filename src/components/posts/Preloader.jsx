import ContentLoader from "react-content-loader";
import Col from "react-bootstrap/Col";

const PostPreloader = ({ length }) => {
  const fakeArr = Array(length).fill(0);
  return (
    <>
      {fakeArr.map((_, index) => (
        <Col key={index} lg={4} md={6}>
          <ContentLoader
            key={index}
            speed={1}
            viewBox="0 0 294 550"
            backgroundColor="#cfcfcf"
            foregroundColor="#d9d9d9"
          > 
            <rect x="0" y="0" rx="20" ry="20" width="294" height="294" />
            <rect x="16" y="310" rx="0" ry="0" width="262" height="24" />
            <rect x="16" y="355" rx="0" ry="0" width="262" height="120" />
            <rect x="16" y="491" rx="20" ry="20" width="134" height="34" />
            <rect x="16" y="536" rx="0" ry="0" width="134" height="15" />
          </ContentLoader>
        </Col>
      ))}
    </>
  );
};

export default PostPreloader;
