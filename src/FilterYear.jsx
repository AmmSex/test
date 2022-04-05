import React from "react";



// function getYears() {
//   return Array.from(
//     new Array(30),
//     (_, index) => new Date().getFullYear() - index
//   );
// }
// export default class FilterYear extends React.Component {
//   static defaultProps = {
//     years: getYears()
//   };
//   onChange = (event) => {
//     let value = event.target.value;
//     this.props.onHandleYear(value);
//   };
//   render() {
//     const { years, stateYear } = this.props;
//     return (
//       <div>
//         <select name="selectYear" onChange={this.onChange}>
//           <option key={0}>Выберите город</option>
//           {years.map((item, index) => (
//             <option key={index}>{item}</option>
//           ))}
//         </select>

//         <p>Год выпуска: {stateYear}</p>
//       </div>
//     );
//   }
// }