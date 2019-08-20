import React from "react";
import moment from "moment";
import RenderPage from "../render-page.component.js";
import PositionedString from "../pdf-rendering/positioned-string.component.js";
import PositionedCheckmark from "../pdf-rendering/positioned-checkmark.component.js";
import { getJudicialDistrictFromCounty } from "../form-common-options/form-common-options";

export default class DraftCourtOrderConviction_Pdf extends React.Component {
  render() {
    const { data, renderData } = this.props;

    return (
      <>
        <RenderPage url="/static/forms/draft-court-order-conviction/draft_court_order_conviction-1.png">
          <PositionedString debugKey="name" left={farLeft} top="14.06%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>

          <PositionedString
            dataKey="person.addressStreet"
            left={farLeft}
            top="17.50%"
          />

          <PositionedString debugKey="lineAddress" left={farLeft} top="20.90%">
            {`${renderData("person.addressCity")} ${renderData(
              "person.addressState"
            )} ${renderData("person.addressZip")}`}
          </PositionedString>

          <PositionedString
            dataKey="person.dayPhone"
            left={farLeft}
            top="24.45%"
          />

          <PositionedString
            dataKey="person.email"
            left={farLeft}
            top="27.95%"
          />

          <PositionedCheckmark
            dataKey="case.courtType"
            left="37.5%"
            top="34.1%"
            shouldShow={data.case.courtType === "District"}
          />

          <PositionedCheckmark
            dataKey="case.courtType"
            left="47.9%"
            top="34.1%"
            shouldShow={data.case.courtType === "Justice"}
          />

          <PositionedString dataKey="case.county" left="51.4%" top="37.35%" />

          <PositionedString left="26.5%" top="37.35%" debugKey="county">
            {this.props.data.case.county
              ? getJudicialDistrictFromCounty(this.props.data.case.county)
              : null}
          </PositionedString>

          <PositionedString debugKey="addressCourt" left="27.8%" top="39.8%">
            {`${renderData("case.addressCourtStreet")}, ${renderData(
              "case.addressCourtCity"
            )}, ${renderData("case.addressCourtState")} ${renderData(
              "case.addressCourtZip"
            )}`}
          </PositionedString>

          <PositionedString debugKey="petitionerName" left="12.5%" top="50.2%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>

          <PositionedString
            dataKey="case.caseNumber"
            left="54.1%"
            top="50.5%"
          />

          <PositionedString dataKey="case.judgeName" left="54.1%" top="55.1%" />

          <PositionedCheckmark
            dataKey="case.resolutionType"
            left="12.1%"
            top="68.8%"
            shouldShow={data.case.resolutionType === "hearing"}
          />

          <PositionedCheckmark
            dataKey="case.resolutionType"
            left="12.1%"
            top="65.7%"
            shouldShow={data.case.resolutionType === "pleadings"}
          />

          <PositionedString
            dataKey="case.resolutionDate"
            left="35%"
            top="68.9%"
          />
        </RenderPage>

        <RenderPage url="/static/forms/draft-court-order-conviction/draft_court_order_conviction-2.png">
          <PositionedString
            dataKey="case.caseNumber"
            left="37.1%"
            top="22.5%"
          />
          <PositionedString
            dataKey="case.caseNumber"
            left="37.1%"
            top="31.5%"
          />
        </RenderPage>

        <RenderPage url="/static/forms/draft-court-order-conviction/draft_court_order_conviction-3.png">
          <PositionedString dataKey="case.prosecutor" left="12%" top="26%" />

          <PositionedCheckmark
            dataKey="case.serviceMethod"
            top="22.6%"
            left="31.9%"
            shouldShow={data.case.serviceMethod === "mail"}
          />
          <PositionedCheckmark
            dataKey="case.serviceMethod"
            top="24.1%"
            left="31.9%"
            shouldShow={data.case.serviceMethod === "hand"}
          />
          <PositionedCheckmark
            dataKey="case.serviceMethod"
            top="25.6%"
            left="31.9%"
            shouldShow={data.case.serviceMethod === "efile"}
          />
          <PositionedCheckmark
            dataKey="case.serviceMethod"
            top="27%"
            left="31.9%"
            shouldShow={data.case.serviceMethod === "email"}
          />
          <PositionedCheckmark
            dataKey=""
            top="28.4%"
            left="31.9%"
            shouldShow={data.case.serviceMethod === "leftAtBusiness"}
          />

          <PositionedString
            top="23.2%"
            left="61.6%"
            dataKey="case.addressServiceStreet"
          />
          <PositionedString
            top="24.7%"
            left="61.6%"
            dataKey="case.addressServiceCity"
          />

          <PositionedString debugKey="serviceStateZip" left="61.6%" top="26.2%">
            {`${renderData("case.addressServiceState")}, ${renderData(
              "case.addressServiceZip"
            )}`}
          </PositionedString>

          <PositionedString
            dataKey="case.serviceDate"
            left="79.2%"
            top="23.4%"
          />

          <PositionedString debugKey="todaysDate" left="11.5%" top="33.2%">
            {moment().format("L")}
          </PositionedString>

          <PositionedString debugKey="printedName" left="61.4%" top="36.9%">
            {`${renderData("person.firstName")} ${renderData(
              "person.middleName"
            )} ${renderData("person.lastName")}`}
          </PositionedString>
        </RenderPage>
      </>
    );
  }
}

const farLeft = `11.28%`;
const petRepLeft = `20.82%`;
const barNumberLeft = `62.2%`;
