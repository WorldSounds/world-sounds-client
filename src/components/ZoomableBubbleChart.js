// import React, {createRef, useState} from "react"
// import ReactBubbleChart from "react-bubble-chart";

// const ZoomableBubbleChart = (props) => {
//   // const [genre, setGenre] = useState({
//   //   key: 'start',
//   //   data: props.data
//   // })

//   // const handleClick = data => {
//   //   const isGroup = data.children !== undefined;
//   //   setGenre({
//   //     key: isGroup ? data.name : 'updated',
//   //     data: isGroup ? data.name : genre
//   //   })
//   // };
//   const wrapper = createRef()

//   console.log(props.data)
//   return (
//     <div style={{ width: "100vw", height: "100vh" }}>
//       {
//         props.data.map((genre, idx) => {
//           return <ReactBubbleChart
//           ref={wrapper}
//           key={idx}
//           data={{
//             _id: genre.name,
//             value: genre.popularity
//           }}
//           // onClick={handleClick}
//         />
//         })
//       }
//     </div>
//   )
// }

// export default ZoomableBubbleChart

import React from "react";
import ReactBubbleChart from "react-bubble-chart";

export default class ZoomableBubbleChart extends React.Component {
  state = {
    key: 'start',
    data: this.props.data
  };

  render() {
    return (
      <div style={{ width: "", height: "200vh" }}>
        <ReactBubbleChart
          {...this.props}
          className="chart__bubble"
          key={this.state.key}
          data={this.state.data}
          onClick={this.handleClick}
        />
      </div>
    );
  }

  handleClick = data => {
    const isGroup = data.children !== undefined;

    this.setState(() => ({
      key: isGroup ? data.children._id : 'updated',
      data: isGroup ? data.children : this.props.data
    }));
  };
}

