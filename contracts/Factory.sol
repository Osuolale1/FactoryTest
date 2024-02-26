// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyToken.sol";

contract TokenFactory {
    event TokenCreated(address indexed tokenAddress, string name, string symbol, uint256 initialSupply);

    function createToken(string memory _name, string memory _symbol, uint256 _initialSupply) external {
        MyToken newToken = new MyToken(_name, _symbol, _initialSupply);
        emit TokenCreated(address(newToken), _name, _symbol, _initialSupply);
    }
}
