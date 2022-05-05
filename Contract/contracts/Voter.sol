//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Voter {
    // Transactions would be for candidate and voter registration and vote casting
    // gas fees to be applied for the above transactions

    struct voter {
        address wallet;
        string name;
        string surName;
        string dob;
        string gender;
        string adhaar;
        uint64 phoneNumber;
        string state;
        string permanentAddress;
        uint8 pincode;
        string photo;
        uint8 age;
    }

    struct Candidate {
        address wallet;
        string name;
        string surName;
        string dob;
        string gender;
        string adhaar;
        uint64 phoneNumber;
        string state;
        string permanentAddress;
        uint8 pincode;
        string photo;
        uint8 age;
        string profession;
        string workAddress;
    }

    struct voterPortal {
        string name;
        string surName;
        string username;
        string password;
        uint8 age;
        string email;
        uint64 phoneNumber;
    }

    struct admin {
        string username;
        string password;
        string email;
    }

    voter[] public voters;
    Candidate[] public candidates;

    mapping(address => string) public walletToUserName;
    mapping(string => voter) public adhaarToVoter;
    mapping(string => voterPortal) public userNameToVoter;

    function getVoter(address _wallet)
        public
        view
        returns (voterPortal memory)
    {
        return userNameToVoter[walletToUserName[_wallet]];
    }

    function registerVoter() public {}

    function registerCandidate() public {}

    function signUpVoter(
        string name,
        string surName,
        string username,
        string password,
        uint8 age,
        string email,
        uint64 phoneNumber
    ) public {}

    function singUpAdmin(
        string username,
        string password,
        string email
    ) public {}
}
