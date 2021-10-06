import "./Main.css"
import Button from "../Button";

const Main = () => {
  return (
    <main>
      <h2>Buttons</h2>
      <div className="container">
        <div className="inner_container">
          <p>${"<Button />"}</p>
          <Button>Default</Button>
        </div>

        <div className="inner_container">
          <p>${"&:hover, &:focus"}</p>
          <Button
            hoverEnabled="default">
            Default
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="inner_container">
          <p>${'<Button variant="outline"/>'}</p>
          <Button
            variant="outline"
            color="primary">
            Default
          </Button>
        </div>

        <div className="inner_container">
          <p>${"&:hover, &:focus"}</p>
          <Button
            variant="outline"
            color="primary"
            hoverEnabled>
            Default
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="inner_container">
          <p>${'<Button variant="text" />'}</p>
          <Button
            variant="text"
            color="primary"
            disableShadow
          >
            Default
          </Button>
        </div>
        <div className="inner_container">
          <p>${"&:hover, &:focus"}</p>
          <Button
            variant="text"
            color="primary"
            hoverEnabled
            disableShadow
          >
            Default
          </Button>
        </div>
      </div>

      <div className="container">
        <div className="inner_container">
          <p>${"<Button  disableShadow />"}</p>
          <Button
            bgColor="bgPrimary"
            disableShadow
          >Default</Button>
        </div>
      </div>

      <div className="container">
        <div className="inner_container">
          <p>${"<Button disabled />"}</p>
          <Button
            disabled
            disableShadow
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button variant="text" disabled/>`}</p>
          <Button
            variant="text"
            disabled
            disableShadow
          >Default</Button>
        </div>
      </div>

      <div className="container">
        <div className="inner_container">
          <p>${`<Button startIcon="local_grocery_store />`}</p>
          <Button
            bgColor="bgPrimary"
            startIcon
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button endIcon="local_grocery_store/>`}</p>
          <Button
            bgColor="bgPrimary"
            endIcon
          >Default</Button>
        </div>
      </div>

      <div className="container threeCol">
        <div className="inner_container">
          <p>${`<Button size="sm" />`}</p>
          <Button
            size="sm"
            bgColor="bgPrimary"
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button size="md"/>`}</p>
          <Button
            bgColor="bgPrimary"
            size="md"
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button size="lg"/>`}</p>
          <Button
            bgColor="bgPrimary"
            size="lg"
          >Default</Button>
        </div>
      </div>

      <div className="container fourCol">
        <div className="inner_container">
          <p>${`<Button color="default"/>`}</p>
          <Button
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button color="primary"/>`}</p>
          <Button
            bgColor="bgPrimary"
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button color="secondary">`}</p>
          <Button
            bgColor="bgSecondary"
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button color="danger">`}</p>
          <Button
            bgColor="bgDanger"
          >Default</Button>
        </div>
      </div>

      <div className="container fourCol">
        <div className="inner_container">
          <p>${`&:hover, &:focus`}</p>
          <Button
            hoverEnabled
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button color="primary"/>`}</p>
          <Button
            bgColor="bgPrimary"
            hoverEnabled
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button color="secondary">`}</p>
          <Button
            bgColor="bgSecondary"
            hoverEnabled
          >Default</Button>
        </div>
        <div className="inner_container">
          <p>${`<Button color="danger">`}</p>
          <Button
            bgColor="bgDanger"
            hoverEnabled
          >Default</Button>
        </div>
      </div>

    </main>
  )

}

export default Main;