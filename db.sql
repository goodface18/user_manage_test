-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 06, 2019 at 03:00 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `user_management_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_users`
--

CREATE TABLE `api_users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `api_users`
--

INSERT INTO `api_users` (`id`, `name`, `password`) VALUES
(1, 'admin', '21232f297a57a5a743894a0e4a801fc3'),
(2, 'normal', 'fea087517c26fadd409bd4b9dc642555');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) UNSIGNED NOT NULL,
  `std_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` enum('Y','N') DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `std_id`, `name`, `status`) VALUES
(1, 'student1', 'oscar brooks', 'Y'),
(2, 'student2', 'Mark', 'N'),
(3, 'student3', 'elick', 'N'),
(4, 'student4', 'james', 'N'),
(5, 'student5', 'student5', 'N'),
(6, 'student6', 'student6', 'N'),
(7, 'student7', 'student7', 'Y'),
(8, 'student8', 'student8', 'Y'),
(9, 'student9', 'student9', 'N'),
(10, 'student10', 'student10', 'N'),
(11, 'student11', 'student11', 'N'),
(12, 'student12', 'student12', 'N'),
(13, 'student13', 'student13', 'N'),
(14, 'student14', 'student14', 'N'),
(15, 'student15', 'student15', 'Y'),
(16, 'student16', 'student16', 'N'),
(17, 'student17', 'student17', 'Y'),
(18, 'student18', 'student18', 'N'),
(19, 'student19', 'student19', 'N'),
(20, 'student20', 'student20', 'Y'),
(21, 'student21', 'student21', 'Y'),
(22, 'student22', 'student22', 'Y'),
(23, 'student23', 'student23', 'Y'),
(24, 'student24', 'student24', 'Y'),
(26, 'student_last', 'student_last', 'N');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_users`
--
ALTER TABLE `api_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `api_users`
--
ALTER TABLE `api_users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
