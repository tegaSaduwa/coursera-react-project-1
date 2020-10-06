import React, { Component } from "react";
import { CardText, CardTitle } from "reactstrap";

export class DishdetailComponent extends Component {
  render() {
    console.log(this.props.selectedDish);
    const comments = this.props.selectedDish?.comments.map((c) => {
      return (
        <>
          <CardTitle>
            {" "}
            -- {c.author}, {c.date}
          </CardTitle>
          <CardText> {c.comment}</CardText>
        </>
      );
    });
    return (
      <div className="row">
        {/* col-md-5  */}
        <div className="col-6 col-md-5  m-1">
          {this.props.renderDish(this.props.selectedDish)}
        </div>
        <div className="col-6 col-md-5  m-1">
          <h4>{this.props.selectedDish ? "Comments" : null}</h4>
          <p>{this.props.selectedDish?.description}</p>
          {comments}
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
