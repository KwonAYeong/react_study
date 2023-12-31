import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types'

class MyComponent extends Component {
    static defaultProps = {
        name:'권아영'
    };
    static defaultProps = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };
    render() {
        const {name, favoriteNumber, children} = this.props; // 비구조화 할당
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br />
                children 값은 {children}입니다. <br />
                제가 좋아하는 숫자는 {favoriteNumber}입니다.
            </div>
        )
    }
}

MyComponent.defaultProps = {
    name:'기본이름'
   };

MyComponent.propTypes = {
    name: PropTypes.string, // name 값은 무조건 string 으로 전달해야 한다는 의미.
    favoriteNumber: PropTypes.number.isRequired 
};

export default MyComponent;