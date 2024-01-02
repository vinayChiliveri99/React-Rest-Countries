function FetchError() {
  return (
    <div
      className="error-section"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src="src/assets/errorImg.png"
        alt=""
        style={{ height: '50vh', width: '35vw', marginTop: '10vh' }}
      />
    </div>
  );
}

export default FetchError;
