'use client';

import RevealAnimation from '../animation/RevealAnimation';

const RatesSection = ({ ratesSectionData }) => {
  if (!ratesSectionData) return null;
  const { standard, misc, punchCardRates, golfPass } = ratesSectionData;
  console.log(`%c${JSON.stringify(ratesSectionData, null, 2)}`, 'color: green');

  return (
    <section className="rates-section pt-[5rem] md:pt-[9rem] lg:pt-[12rem] pb-[9rem] md:pb-[9rem] lg:pb-[12rem] bg-background-2" id="rates">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="table-wrapper">
            <div className="table-preface pb-5">
              <h3 className="lg:max-w-1/2 text-[1.75rem] text-fr-primary-800 md:text-[2.5rem] pb-[.7rem]">{standard.standardRatesHeading}</h3>
              {standard.standardRatesDescription && (
                <p className="lg:max-w-1/2">{standard.standardRatesDescription} </p>
              )}
            </div>
            <table className="table-auto table-striped table-striped-3">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    <div className="th-wrap"> 9 Holes</div>
                  </th>
                  <th scope="col">
                    <div className="th-wrap"> 18 Holes</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{standard.adultTitle}</div>
                    {standard.adultTitleDef?.length > 0 && <div className="note">{standard.adultTitleDef}</div>}
                  </th>
                  <td>
                    <div>{standard.adult9}</div>
                  </td>
                  <td>
                    <div>{standard.adult18}</div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{standard.seniorStudentTitle}</div>
                    {standard.seniorStudentTitleDef?.length > 0 && (
                      <div className="note">{standard.seniorStudentTitleDef}</div>
                    )}
                  </th>
                  <td>
                    <div>{standard.seniorStudent9}</div>
                  </td>
                  <td>
                    <div>{standard.seniorStudent18}</div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{standard.jrTitle}</div>
                    {standard.jrTitleDef?.length > 0 && <div className="note">{standard.jrTitleDef}</div>}
                  </th>
                  <td>
                    <div>{standard.jr9}</div>
                  </td>
                  <td>
                    <div>{standard.jr18}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </RevealAnimation>
        <RevealAnimation delay={0.1}>
          <div className="table-wrapper pt-[5rem] md:pt-[7rem]">
            <hr className="opacity-10 pb-[2rem]" />
            <div className="table-preface pb-5">
              <h3 className="lg:max-w-1/2 text-[1.75rem] text-fr-primary-800 md:text-[2.5rem] pb-[.7rem]">{misc.miscHeading}</h3>
              {misc.miscDescription?.length > 0 && <p className="lg:max-w-1/2">{misc.miscDescription} </p>}
            </div>
            <table className="table-auto table-striped table-striped-3">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    <div className="th-wrap"> 9 Holes</div>
                  </th>
                  <th scope="col">
                    <div className="th-wrap"> 18 Holes</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{misc.powerCartTitle}</div>
                    {misc.powerCartTitleDef?.length > 0 && <div className="note">{misc.powerCartTitleDef}</div>}
                  </th>
                  <td>
                    <div>{misc.powerCart9}</div>
                  </td>
                  <td>
                    <div>{misc.powerCart18}</div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{misc.pullCartTitle}</div>
                    {misc.pullCartTitleDef?.length > 0 && <div className="note">{misc.pullCartTitleDef}</div>}
                  </th>
                  <td>
                    <div>{misc.pullCart9}</div>
                  </td>
                  <td>
                    <div>{misc.pullCart18}</div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{misc.clubsTitle}</div>
                    {misc.clubsTitleDef?.length > 0 && <div className="note">{misc.clubsTitleDef}</div>}
                  </th>
                  <td>
                    <div>{misc.clubs9}</div>
                  </td>
                  <td>
                    <div>{misc.clubs18}</div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{misc.trailFeeTitle}</div>
                    {misc.trailFeeTitleDef?.length > 0 && <div className="note">{misc.trailFeeTitleDef}</div>}
                  </th>
                  <td>
                    <div>{misc.trailFee9}</div>
                  </td>
                  <td>
                    <div>{misc.trailFee18}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.1}>
          <div className="table-wrapper pt-[5rem] md:pt-[7rem]">
            <hr className="opacity-10 pb-[2rem]" />
            <div className="table-preface pb-5">
              <h3 className="lg:max-w-1/2 text-[1.75rem] text-fr-primary-800 md:text-[2.5rem] pb-[.7rem]">{golfPass.golfPassHeading}</h3>
              {golfPass.golfPassDescription?.length > 0 && (
                <p className="lg:max-w-1/2">{golfPass.golfPassDescription} </p>
              )}
            </div>
            <table className="table-auto table-striped table-striped-3">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">
                    <div className="th-wrap"> 9 Holes</div>
                  </th>
                  <th scope="col">
                    <div className="th-wrap"> 18 Holes</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="th-wrap">{golfPass.passTitle}</div>
                    {golfPass.passTitleDef?.length > 0 && <div className="note">{golfPass.passTitleDef}</div>}
                  </th>
                  <td>
                    <div>{golfPass.pass9}</div>
                  </td>
                  <td>
                    <div>{golfPass.pass18}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default RatesSection;
