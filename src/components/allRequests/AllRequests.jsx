/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllRequest } from "../../actions";
import { useHistory } from "react-router-dom";
import "./styles.css";
const AllRequests = (props) => {
  const history = useHistory();
  useEffect(() => {
    props.getAllRequest();
  }, []);
  return (
    <div className="adminPanel">
      <div className="main">
        <div className="statistics">
          <div className="row">
            <div className="col-md-6">
              <div className="statistic__item">
                <div className="num">0</div>
                <div className="statistic__name">Заявки сегодня</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="statistic__item">
                <div className="num">
                  {props.allData.allUserRequests.length}
                </div>
                <div className="statistic__name">Общее количество заявок</div>
              </div>
            </div>
          </div>
        </div>
        <div className="main__content">
          <div className="content__header">
            <div className="row">
              <div className="col-md-6">
                <h1 className="content__title">Заявки</h1>
              </div>
            </div>
          </div>
          <div className="content__body">
            <div className="row">
              <div className="col-md-12" style={{ overflowX: "auto" }}>
                <table className="table">
                  <tbody>
                    <tr className="table__header">
                      <th className="order">№</th>
                      <th className="name">Имя</th>
                      <th className="phone">Телефон</th>
                      <th className="email">Email</th>
                      <th className="company">Компания</th>
                      <th className="date">Дата</th>
                    </tr>

                    {props.allData.allUserRequests.map((data, key) => (
                      <tr key={data._id} className="table__header">
                        <th className="order">{++key}</th>
                        <th className="name">{data.name}</th>
                        <th className="phone">{data.number}</th>
                        <th className="email">{data.email}</th>
                        <th className="company">{data.company}</th>
                        <th className="date">{data.date}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { allData: state.userRequest };
};

export default connect(mapStateToProps, { getAllRequest })(AllRequests);
