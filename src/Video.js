const Video = () => {
    return (
      <div>
        <video
          playsInline
          autoPlay
          muted
          loop
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
          Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
  
        <header
          style={{
            background: 'tan',
            position: 'fixed',
            width: '100%',
            textAlign: 'center',
            color: 'white',
            transition: '.4s',
            padding: '0.5em',
          }}
        >
          <nav>
            <a href="#">Shop</a>
            <a href="#">Stores</a>
            <a href="#">Products</a>
          </nav>
        </header>
  
        <div
          className="overlay"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h2
            style={{
              background: '#000',
              color: 'tan',
              fontWeight: 600,
              margin: '2rem 3rem 0',
              mixBlendMode: 'overlay',
              padding: '5px 15px',
              textAlign: 'center',
            }}
          >
            Meet the crazy-smart women we asked.
          </h2>
        </div>
      </div>
    );
  };
  
  export default Video;
  