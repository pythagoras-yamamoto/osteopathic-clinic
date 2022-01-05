import React from "react";
import styled from "styled-components";

export const FeeTable = () => {
  return (
    <Table>
      <tr>
        <th>無料プラン</th>
        <th class="popular">
          <span class="inner">
            <span class="no1">人気No.1</span>初級プラン
          </span>
        </th>
        <th>上級プラン</th>
      </tr>
      <tr>
        <td>¥0</td>
        <td class="popular">¥5,000</td>
        <td>¥8,000</td>
      </tr>
      <tr>
        <td>
          <a href="#">申し込み</a>
        </td>
        <td>
          <a href="#">申し込み</a>
        </td>
        <td>
          <a href="#">申し込み</a>
        </td>
      </tr>
      <tr>
        <td>保証なし</td>
        <td class="popular">保証1ヶ月</td>
        <td>保証3ヶ月</td>
      </tr>
    </Table>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
  width: 490px;

  tr:last-child {
    border-bottom:solid 1px #ddd;
  }

  th {
  text-align: center;
  padding: 7px 0;
  border-right:solid 1px #ddd;
  border-left:solid 1px #ddd;
  width: 155px;
  }

  th:nth-child(1) {
   background-color:#dddddd;
  }


  td {
    text-align: center;
    padding: 7px 0;
    border-right:solid 1px #ddd;
    border-left:solid 1px #ddd;
    width: 155px;
  }

  td a{
    background-color: #25b327;
    color: white;
    padding:5px 20px;
    border-radius: 30px;
    font-weight: bold;
  }

  .popular{
    width: 180px;
  }
`


table th:nth-child(3){
  background-color:#f5b932;
  color: white;
}

table tr:nth-child(2) td{
  font-size: 30px;
}





table th.popular{
  position: relative;
}

table th.popular span.no1{
  position: absolute;
  top: -10px;
  left:calc(50% - 30px);
  background: #bdcc28;
  width: 60px;
  font-size: 10px;
  border-radius: 15px;
  line-height: 1;
  padding: 5px;
}

table th.popular span.inner{
  position: absolute;
  color:white;
  background-color: #f34955;
  left: 0;
  bottom: 0;
  display: block;
  width: 180px;
  padding: 10px 0;
}