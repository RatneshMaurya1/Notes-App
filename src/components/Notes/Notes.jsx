import "./notes.css";

const Notes = ({group}) => {
  console.log(group)
  return (
    <>
      <div className="notes-container">
        <header className="header">
            <div className="header-icon" style={{backgroundColor:group.color}}>
              <p>{group.upperCase}</p>
            </div>
            <div className="header-name">
              <p>{group.name}</p>
            </div>
        </header>
        <main></main>
        <footer></footer>
      </div>
    </>
  );
};

export default Notes;
