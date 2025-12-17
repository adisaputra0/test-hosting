document.addEventListener("DOMContentLoaded", () => {
  // --- KONFIGURASI FILTER PRODUK ---
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productItems = document.querySelectorAll(".product-item");

  // Fungsi untuk mengubah tampilan tombol aktif
  const setActiveButton = (targetBtn) => {
    filterBtns.forEach((btn) => {
      // Reset style semua tombol ke default (putih)
      btn.classList.remove(
        "active",
        "bg-emerald-500",
        "text-white",
        "shadow-md"
      );
      btn.classList.add(
        "bg-white",
        "text-gray-600",
        "border",
        "border-gray-200"
      );
    });

    // Set style tombol yang diklik menjadi aktif (hijau)
    targetBtn.classList.add(
      "active",
      "bg-emerald-500",
      "text-white",
      "shadow-md"
    );
    targetBtn.classList.remove(
      "bg-white",
      "text-gray-600",
      "border",
      "border-gray-200"
    );
  };

  // Fungsi utama filtering
  const filterProducts = (category) => {
    productItems.forEach((item) => {
      const itemCategory = item.getAttribute("data-category");

      // Logika: Jika filter 'all' ATAU kategori item cocok dengan filter
      if (category === "all" || itemCategory === category) {
        // Tampilkan Item
        item.classList.remove("hidden");

        // Animasi ulang (Fade Up)
        item.classList.remove("aos-animate");
        setTimeout(() => item.classList.add("aos-animate"), 50);
      } else {
        // Sembunyikan Item
        item.classList.add("hidden");
      }
    });

    // Refresh library AOS (Animate On Scroll) agar posisi layout diperbarui
    if (typeof AOS !== "undefined") {
      setTimeout(() => AOS.refresh(), 300);
    }
  };

  // Tambahkan Event Listener ke setiap tombol filter
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const selectedFilter = btn.getAttribute("data-filter");

      // 1. Ubah tampilan tombol
      setActiveButton(btn);

      // 2. Jalankan logika filter
      filterProducts(selectedFilter);
    });
  });
});
