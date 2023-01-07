-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2023 at 09:31 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db`
--

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20221231144901-table-siswa.js'),
('20221231144922-table-ruangan.js'),
('20221231144935-table-kloter.js'),
('20221231144944-table-nilai.js'),
('20221231145121-table-hasil-berkas.js');

-- --------------------------------------------------------

--
-- Table structure for table `tb_kartu_ujian`
--

CREATE TABLE `tb_kartu_ujian` (
  `id_ujian` int(11) NOT NULL,
  `id_peserta` int(11) NOT NULL,
  `id_kloter` int(11) NOT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_kloter`
--

CREATE TABLE `tb_kloter` (
  `id_kloter` int(11) NOT NULL,
  `ruangan` varchar(255) DEFAULT NULL,
  `waktu` varchar(255) DEFAULT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_pengumuman`
--

CREATE TABLE `tb_pengumuman` (
  `id_ujian` int(11) DEFAULT NULL,
  `nilai` int(11) DEFAULT NULL,
  `rangking` int(11) DEFAULT NULL,
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_profil_peserta`
--

CREATE TABLE `tb_profil_peserta` (
  `id_peserta` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nisn` int(11) NOT NULL,
  `ttl` varchar(255) NOT NULL,
  `agama` varchar(255) NOT NULL,
  `alamat` varchar(255) NOT NULL,
  `no_hp` int(11) NOT NULL,
  `ortu` varchar(255) NOT NULL,
  `sekolah_asal` varchar(255) NOT NULL,
  `pil_jurusan` varchar(255) DEFAULT NULL,
  `skhu` varchar(255) DEFAULT NULL,
  `kk` varchar(255) DEFAULT NULL,
  `surat_kes` varchar(255) DEFAULT NULL,
  `akte` varchar(255) DEFAULT NULL,
  `raport` varchar(255) DEFAULT NULL,
  `bukti_bayar` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_profil_peserta`
--

INSERT INTO `tb_profil_peserta` (`id_peserta`, `id_user`, `nama`, `nisn`, `ttl`, `agama`, `alamat`, `no_hp`, `ortu`, `sekolah_asal`, `pil_jurusan`, `skhu`, `kk`, `surat_kes`, `akte`, `raport`, `bukti_bayar`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Jidane', 1234567, 'Sleman, 11 Mei 2000', 'Islam', 'Sleman', 8976568, '-', 'SMAN 1 Sleman', 'RPL', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', '2023-01-05 01:14:51', '2023-01-05 01:14:51'),
(5, 5, 'astaga', 1234567, 'Sleman', 'z', 'z', 1, 'zd', 'c', 'd', 'd', 'r', 't', 'd', 'e', '6g', '2023-01-05 01:29:23', '2023-01-06 02:24:52'),
(6, 3, 'Aji solehot', 123877, 'Sleman, 23 Februari 2001', 'islam', 'Sleman', 86257829, '-', 'SMP 1 Bantul', 'RPL', 'skhu.pdf', 'kk.pdf', 'surat.pdf', 'akte.pdf', 'raport.odf', 'bayar.pdf', '2023-01-05 08:52:34', '2023-01-05 09:24:18'),
(7, 1, 'Jidanearj', 12345678, 'ii', 'dshj', 'dshjdfdd', 24, 'f', 'reg', 'r', 'ret', 'tdf', 'gh', 'fdcv', 'trd', 'dsg', '2023-01-06 02:26:33', '2023-01-06 02:26:57');

-- --------------------------------------------------------

--
-- Table structure for table `tb_user`
--

CREATE TABLE `tb_user` (
  `id_user` int(11) NOT NULL,
  `role` enum('admin','siswa') DEFAULT 'siswa',
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tb_user`
--

INSERT INTO `tb_user` (`id_user`, `role`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'admin', '7@gmail.com', '$2b$10$VR0.pp1ekLDCKW5fWnoSN.Quf/1aw03jzPk4KA4eUc78nNDbE3//G', '2022-12-31 18:37:53', '2022-12-31 18:37:29'),
(2, 'siswa', 'lk@gmail.com', '$2b$10$wvG92dcwpUN4uE.6lNvfz.f6mEV7/PYrQ8ks.ySN0X8GDfgx8cpuW', '2022-12-29 19:54:08', '2022-12-29 19:54:08'),
(3, 'siswa', 'yui@gmail.com', '$2b$10$zuzKIXTfOqzlb/G7Axs2P.Fi/zEs//kqrGOjC.agoqtCClACZJj8O', '2022-12-30 21:16:34', '2022-12-30 21:16:34'),
(4, 'siswa', '3@gmail.com', '$2b$10$3OpavKHKwEaF7D8KtwSxXub3l.992W8eQKScBgYCMCQN7YBJ2g5vC', '2022-12-30 21:42:51', '2022-12-30 21:42:51'),
(5, 'siswa', '5@gmail.com', '$2b$10$jrUAq590JU5e/tRMe9/efeJoEBtzIrjSM0VnOIQnSIl523PqEbGyS', '2022-12-31 17:53:43', '2022-12-31 17:53:43'),
(9, 'admin', 'v@gmail.com', '$2b$10$jKOTMyDOfy92M3/w8nrzEeh62cxppIAKvd.VX/2x7uI1FH1UOjFkO', '2023-01-02 07:05:31', '2023-01-02 07:05:31'),
(10, 'admin', 'vo@gmail.com', '$2b$10$aCOMfGNSP.G2lvFqaZlnCukq4NYoqnd7btSomzwxjWp/NUs9dPGjK', '2023-01-02 07:06:31', '2023-01-02 07:06:31'),
(11, 'admin', 'vogmail.com', '$2b$10$vIBXDthZM/aXQWaXq0iwCOGo5j.NKEWzV6khkm7ObzD7UVtfo4KLe', '2023-01-02 07:07:55', '2023-01-02 07:07:55'),
(12, 'admin', 'vi@gmail.com', '$2b$10$XCO99tEReRPdHXduciA1EuvIpnQFOc6/cRyvQgH8zyHATKtes4GlC', '2023-01-02 07:09:18', '2023-01-02 07:09:18'),
(13, 'admin', 'vio@gmail.com', '$2b$10$MuMh2e1SvigZfphYnr3Xee/9bWeu0AgKDf6.cCDdWvT1ZIoZhEVjy', '2023-01-02 07:09:57', '2023-01-02 07:09:57'),
(14, 'siswa', 'e3@gmail.com', '$2b$10$8bghWfXz0mlQ6tCQju/RiucrZ4Kr9auIUgEUUHwew3JuJmJ0tCF7i', '2023-01-03 04:06:39', '2023-01-03 04:06:39'),
(15, 'siswa', 'a3@gmail.com', '$2b$10$6ZahcUCfkK5fwMwAJKheHukbo1lnc.0bXS6.q94laH0lHqIs/h9J.', '2023-01-03 04:07:46', '2023-01-03 04:07:46'),
(16, '', 'ak@gmail.com', '$2b$10$C2fOe3i3mr9X6KrjwrIID.Ku1nb31JadaAtdim0CeBvd4Tgcm9sUu', '2023-01-03 04:08:01', '2023-01-03 04:08:01'),
(17, '', 'aks@gmail.com', '$2b$10$W62oieERlWmVaMxL/EfBv.wJHLGviT3bZiDGP0Z6p/K.B0oWG8Lai', '2023-01-03 04:09:49', '2023-01-03 04:09:49'),
(18, 'siswa', 'akj@gmail.com', '$2b$10$J1WtDmyqkVNadieL6jeEQu7QBy6TZN2USnYfVF1ytf.i9Q9lMEU/a', '2023-01-06 20:56:05', '2023-01-06 20:56:05'),
(19, 'siswa', 'ako@gmail.com', '$2b$10$hpYoBp2QnhWIWzNWw5zMzukf5oj91Ctt59vH.GHXL60mulei7d3.2', '2023-01-06 21:49:37', '2023-01-06 21:49:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tb_kartu_ujian`
--
ALTER TABLE `tb_kartu_ujian`
  ADD PRIMARY KEY (`id_ujian`),
  ADD KEY `id_kloter` (`id_kloter`),
  ADD KEY `id_peserta` (`id_peserta`);

--
-- Indexes for table `tb_kloter`
--
ALTER TABLE `tb_kloter`
  ADD PRIMARY KEY (`id_kloter`);

--
-- Indexes for table `tb_pengumuman`
--
ALTER TABLE `tb_pengumuman`
  ADD KEY `id_ujian` (`id_ujian`);

--
-- Indexes for table `tb_profil_peserta`
--
ALTER TABLE `tb_profil_peserta`
  ADD PRIMARY KEY (`id_peserta`),
  ADD KEY `ID_USER` (`id_user`);

--
-- Indexes for table `tb_user`
--
ALTER TABLE `tb_user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_kartu_ujian`
--
ALTER TABLE `tb_kartu_ujian`
  MODIFY `id_ujian` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_kloter`
--
ALTER TABLE `tb_kloter`
  MODIFY `id_kloter` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_profil_peserta`
--
ALTER TABLE `tb_profil_peserta`
  MODIFY `id_peserta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tb_user`
--
ALTER TABLE `tb_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tb_kartu_ujian`
--
ALTER TABLE `tb_kartu_ujian`
  ADD CONSTRAINT `tb_kartu_ujian_ibfk_1` FOREIGN KEY (`id_kloter`) REFERENCES `tb_kloter` (`id_kloter`),
  ADD CONSTRAINT `tb_kartu_ujian_ibfk_2` FOREIGN KEY (`id_peserta`) REFERENCES `tb_profil_peserta` (`id_peserta`);

--
-- Constraints for table `tb_pengumuman`
--
ALTER TABLE `tb_pengumuman`
  ADD CONSTRAINT `ID_PESERTA` FOREIGN KEY (`id_ujian`) REFERENCES `tb_profil_peserta` (`id_peserta`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tb_pengumuman_ibfk_1` FOREIGN KEY (`id_ujian`) REFERENCES `tb_profil_peserta` (`id_peserta`),
  ADD CONSTRAINT `tb_pengumuman_ibfk_2` FOREIGN KEY (`id_ujian`) REFERENCES `tb_kartu_ujian` (`id_ujian`);

--
-- Constraints for table `tb_profil_peserta`
--
ALTER TABLE `tb_profil_peserta`
  ADD CONSTRAINT `ID_USER` FOREIGN KEY (`id_user`) REFERENCES `tb_user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
