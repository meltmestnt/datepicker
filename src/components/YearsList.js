import React from 'react'
import styled from 'styled-components';
import {getYearsList, isDate} from './../utils/calendar';

const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
   
    background: #fff;
    flex-direction: column;
    align-items: center;
`

const Year = styled.h5`
  cursor: pointer;
  align-self: center;
  color: ${props =>
    props.active ? "rgb(0, 188, 212)" : "rgba(0, 0, 0, 0.87)"};
  font-size: ${props => props.active ? '26px' : '17px'};
  font-weight: 400;
  position: relative;
  margin: 7px 0px;
`;


class YearsList extends React.Component {
    state = {
        scrollRef: null
    }
    componentDidMount() {
        const div = this.scrollRef;
        if (div) {
            const active = div.querySelector('.active');
            active.scrollIntoView();
        }
    }
    render() {
        const {date, minYear, maxYear, onDateChanged} = this.props;
        const currentYear = isDate(date) ? new Date(date).getFullYear() : new Date().getFullYear();
        const yearsListLabels = getYearsList(minYear, maxYear);
        const changeYear = year => {
            let propDate = date ? date : new Date();
            onDateChanged(new Date(propDate.setFullYear(year)))
        }
        return (
          <Container innerRef={ref => (this.scrollRef = ref)}>
            {yearsListLabels.map(y => (
              <Year
                className={+currentYear === +y ? 'active' : ''}
                active={+currentYear === +y}
                key={y}
                onClick={() => changeYear(y)}
              >
                {y}
              </Year>
            ))}
          </Container>
        );
    }
}


export default YearsList
