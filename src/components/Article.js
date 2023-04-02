export default function Article(props) {
  return (
    <div className="article">
      <article>
        <time>{props.date}</time>
        <h2>{props.title}</h2>
        <img src={props.img} alt="some"></img>
        <p>
          lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          quos iusto provident nulla, corrupti ad unde optio obcaecati!
          Distinctio accusamus optio nemo quis deserunt in iusto quae
          laudantium. Repudiandae, dignissimos. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Aperiam laboriosam iste, culpa aut quasi
          qui ullam, fugit dolore voluptatum, facere consequuntur. Maxime
          accusantium veritatis doloremque labore soluta natus quisquam officia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tenetur
          dolorum, at eligendi amet laboriosam debitis, velit assumenda quam
          adipisci non omnis quis dolor? Fugit laboriosam culpa amet.
        </p>
      </article>
      <a href=" ">Continues...</a>
    </div>
  );
}
