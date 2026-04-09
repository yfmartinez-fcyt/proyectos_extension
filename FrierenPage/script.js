const episodios = document.querySelectorAll(".ep-card");

let links = {
  1: "https://drive.google.com/file/d/1-xROiUWbZhnpIeqNbQY58nBxjYytSANd/view?usp=drive_link",
  2: "https://drive.google.com/file/d/1-xZSfRsmhBuDhx3mhk8JUrzIhLTXz2eE/view?usp=drive_link",
  3: "https://drive.google.com/file/d/1-yqXg3xa72jxLnnF4VHsUD6CpsCEqyOY/view?usp=drive_link",
  4: "https://drive.google.com/file/d/10-o0nIqZUrMi6GN_fywuI84TebhMAgz1/view?usp=drive_link",
  5: "https://drive.google.com/file/d/15m11AuC1WO3y7XtK8-qrVo5GHTtIHofQ/view?usp=drive_link",
  6: "https://drive.google.com/file/d/1EvcYVa-L_dar-r91gOiiBXmuMyUqGHiU/view?usp=drive_link",
  7: "https://drive.google.com/file/d/1LWWVUAo5RTS9zDNO_nz4Eu9sByaV9X3t/view?usp=drive_link",
  8: "https://drive.google.com/file/d/1TRHddL6AuxMX-ClcMM4XLnpprLqTnuFj/view?usp=drive_link",
  9: "https://drive.google.com/file/d/1ZoJZd9_e0CediVom4iixBjFpLjeEP85z/view?usp=drive_link",
  10: "https://drive.google.com/file/d/1eB461ctALVHkCGZ9s9NoqLVCZsp-tkot/view?usp=drive_link",
  11: "https://drive.google.com/file/d/1mWKmoFKiNoSP-7xUadd84Lmz1ZQXUD-n/view?usp=drive_link",
  12: "https://drive.google.com/file/d/1rXdjzwgFAabLPirBae9AE7s-Ori7WiYh/view?usp=drive_link",
  13: "https://drive.google.com/file/d/1PlnC9JFv6AzL876-g65ajTcpAwkUshgW/view?usp=drive_link",
  14: "https://drive.google.com/file/d/1PjtRhJJ50uzpNbasgMb-uQd_0uYGItJ3/view?usp=drive_link",
  15: "https://drive.google.com/file/d/1PqPxEIpxjPModnWPIAPScT3UpEcGwVuw/view?usp=drive_link",
  16: "https://drive.google.com/file/d/1PnVjmqLlCvnevgD7nDBusIVZmM_ZYxRR/view?usp=drive_link",
  17: "https://drive.google.com/file/d/1QPS5Nn4Kre4jtgpVsCeKVLJcLCuhpk6r/view?usp=drive_link",
  18: "https://drive.google.com/file/d/1V_w4y2Y-k8Cq4k7Z8hAlJULp70wd7T3i/view?usp=drive_link",
  19: "https://drive.google.com/file/d/1hfv9_Rs0i9eoqP7vyTadXZP4DqQIMShc/view?usp=drive_link",
  20: "https://drive.google.com/file/d/1nuSD9WBKtqQGdls2Lh1Ve60b7BvNi018/view?usp=drive_link",
  21: "https://drive.google.com/file/d/1vMmWWOVJdl4CaRFz0yM5EeNVBdQ3x0FM/view?usp=drive_link",
  22: "https://drive.google.com/file/d/11pc6u7X9NOkrBNLaZR9Tb5Pde6yOgV6k/view?usp=drive_link",
  23: "https://drive.google.com/file/d/1BY7F8HVUVCVoCrqvbecLwhgMw7MmugR_/view?usp=drive_link",
  24: "https://drive.google.com/file/d/1FieaY-5nJOIa2YXFyRVwMEp8XZCbMrut/view?usp=drive_link",
  25: "https://drive.google.com/file/d/1QinLljWsAiQYAWwvUC5H5O2JS0dMnjNa/view?usp=drive_link",
  26: "https://drive.google.com/file/d/1ci0zLypf2K_V9EJeMgIqVUfk7scx0zoy/view?usp=drive_link",
  27: "https://drive.google.com/file/d/1iK77b_FXB6CFtaYAUoWxN3iuX3b5t-Dx/view?usp=drive_link",
  28: "https://drive.google.com/file/d/1wzYwZzrK1Uz-3DelPWVrlwQxXbET1Kvs/view?usp=drive_link",
};

for (x = 0; x < 28; x++) {
  episodios[x].setAttribute("href", links[x + 1]);
}
