function HomePage() {
  return (
    <div>
      <div>
        <img src={beer} alt="" />
        <Link to="/beers">
          <h1>All Beers</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquam
          repellat vero et, quis illum doloribus quidem rerum iusto doloremque
          a, fugiat saepe labore sit? Repellendus veniam corporis voluptatum
          doloribus.
        </p>
      </div>
      <div>
        <img src={beer} alt="" />
        <Link to="/random">
          <h1>Random Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquam
          repellat vero et, quis illum doloribus quidem rerum iusto doloremque
          a, fugiat saepe labore sit? Repellendus veniam corporis voluptatum
          doloribus.
        </p>
      </div>
      <div>
        <img src={beer} alt="" />
        <Link to="/new-beer">
          <h1>New Beer</h1>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aliquam
          repellat vero et, quis illum doloribus quidem rerum iusto doloremque
          a, fugiat saepe labore sit? Repellendus veniam corporis voluptatum
          doloribus.
        </p>
      </div>
    </div>
  );
}

export default HomePe;
