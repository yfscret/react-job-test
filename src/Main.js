import './css/Main.css';
import itemImg from './images/itemImg.svg';
import markIcon from './images/markIcon.svg';

function Main() {
  const CATEGORIES = ['Most popular in Health & Medicine', 'Most popular in Education']
  return (
    <div id="main">
      {/* 看错页面了 */}
      {/* <div className="mainUP">
        Education presentations and documents
        <div className="selectItem">
          <SelectItem />
        </div>
      </div> */}
      <Category categories={CATEGORIES} />
    </div>
  );
}

// function SelectItem() {
//   return (
//     <>
//       <select>
//         <option>File type</option>
//       </select>
//       <select>
//         <option>Date uploaded</option>
//       </select>
//       <select>
//         <option>All languages</option>
//       </select>
//     </>
//   )
// }

function Category({ categories }) {
  return (
    <>
      {categories.map(category => (
        <CategoryItem key={category} category={category} />
      ))}
    </>
  )
}

function CategoryItem({ category }) {
  return (
    <section className="category">
      <div className="sectionTitleDiv">
        <div className="sectionTitle">{category}</div>
        <a href="/">View all</a>
      </div>
      <div className="content">
        <SectionItem />
        <SectionItem />
        <SectionItem />
        <SectionItem />
      </div>
    </section>
  );
}

function SectionItem() {
  return (
    <div className="item">
      <div className="img"><img src={itemImg} />
      </div>
      <div className="title_div">
        <div className="title">
          Copy Being Good Digital Partners With College Students On...
        </div>
        <div className="mark">
          <img src={markIcon} />
        </div>
      </div>
      <div className="like"><span>194 likes</span> · <span>389 saved</span> · <span>39K views</span></div>
      <div className="name">Mr. Ronald Quileste, PhD</div>
    </div>
  )
}

export default Main;
