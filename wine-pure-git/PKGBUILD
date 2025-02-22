# Maintainer: Vasiliy Stelmachenok <ventureo@cachyos.org>
## Maintainers of original Arch Linux package:
# Maintainer: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Eduardo Romero <eduardo@archlinux.org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>

pkgname=wine-pure-git
pkgver=10.2.r0.g41abefccebf
pkgrel=1
source=(
  "git+https://gitlab.winehq.org/wine/wine.git"
  "git+https://gitlab.winehq.org/wine/wine-staging.git"
  30-win32-aliases.conf
  wine-binfmt.conf
  ntsync-10.1-staging.patch
  7064.patch
  winex11.drv-Recognize-the-keyboard-in-a-locale-indep.patch
  HACK-winex11.drv-Let-the-WM-focus-our-windows-by-def.patch
  0001-HACK-wine.inf-Add-native-builtin-overrides-for-msvcr.patch
  0002-wine.inf-Set-a-valid-Win10-ProductId.patch
  0003-wineboot-On-prefix-upgrade-update-win10-build-number.patch
  0004-wineboot-Generate-better-DigitalProductId.patch
  0005-wineboot-Load-root-certificates-on-prefix-update.patch
  Avoid-winemenubuilder-to-startup-explorer.exe.patch
  include-use-ntsync.h-v7-module-header-as-an-in-tree-header.patch
)
sha512sums=(
  'SKIP'
  'SKIP'
  '6e54ece7ec7022b3c9d94ad64bdf1017338da16c618966e8baf398e6f18f80f7b0576edf1d1da47ed77b96d577e4cbb2bb0156b0b11c183a0accf22654b0a2bb'
  'bdde7ae015d8a98ba55e84b86dc05aca1d4f8de85be7e4bd6187054bfe4ac83b5a20538945b63fb073caab78022141e9545685e4e3698c97ff173cf30859e285'
  'd58b9230119074bac3452e1ba8fd24fc45787b608b1ba9a053a6288ed3f9000543fc263f5bbefdac5f5d859a2b1a61d5f6450b7ab1f70353a10e061fa9e35fce'
  '5924de3d5f43fcf9ded9edba38efe4625490e06a44db322af7311e264a56aa9e9fd5fa2133427dff77590656637be0276f8a808f88e127c0dcd8e2c576f54fe4'
  'fe23f9e5a108338d38ad7cda033d62d5d8bdb6f35f1c1f4206ee21dbe8f964119ab7d233346db9c43e56fa52cda6ded685aeba783a9945e0a5e3ea7c22004402'
  'cae7a3eaaff8b9e937268b05934fa9a64947649948de951a9ea933774783ab5ec970b2c5ccabcc2b5415fa58c490b422cddda0a25ddb538963c56e861e6aa975'
  '470d13c84bac8a7f5b2a64e68b7f0d17affa4e8ab6243a2dee11ab542dd223213baedc463b1fbe166f8289413c1d9f5277880ed2a2cf9c22f7640d41834d63b0'
  'e475131ba409fe02827b60ac5fb40d286841d932133ceae0ed3e52be06bc0be3dc899e332274dec3b22e829f08a02b6e48218c9b7d2025d9b21f1b8ca1f64ee8'
  '8f89da5707dc11985e0212bb76056f9718be2bd405f02e1794bdf62bf410ee5d0bafbac80e95ae7a548288ff6034436ef9cba91bf87ffccd920e565661f9bf71'
  'cdb99445f86fe82192b8f47da36b129586ca3c788177c22fbb7108239eb37a868b5c363f6b88b4ea3e8b2db4b3a0f58df21c565e5aafe43e7214a862d77a8028'
  'cc22a55db17c32ce5961d5317a01cf8a75d021adfbd576de660de897e1f312eafaa88431d9df57e3a984e5f03a9e1efdcf6c090a4efe29051d9ac4ee81353a9b'
  '8192f79ee24f0e1bd7852ddea1f34e77b1395fa4396a8da2f02bff562ae5038cf9ed24cad599b8847839d7c6f175c7b56fa45806754921d897e1f51e1bcdf03f'
  '421348c1969c443de69ae3d0aa48803799339b82bfea4cd3647bdaf0b1b12c75ae34e178accdf44f49ac65a8b734e8340fb388ef0d62bb8fe41269924ea71e5f'
)

pkgdesc="Bleeding-edge Wine build (Staging, WoW64, NTSync, Wayland)"
url="https://github.com/ventureoo/PKGBUILDs"
arch=(x86_64)
options=(staticlibs !lto)
license=(LGPL-2.1-or-later)
depends=(
  desktop-file-utils
  fontconfig
  freetype2
  gcc-libs
  gettext
  libxcursor
  libxkbcommon
  libxi
  libxrandr
  wayland
  ffmpeg
  unixodbc
)
makedepends=(
  git
  alsa-lib
  gnutls
  gst-plugins-base-libs
  libpulse
  libxcomposite
  mesa
  opencl-headers
  opencl-icd-loader
  sdl2
  vulkan-headers
  vulkan-icd-loader
  mingw-w64-gcc
)
optdepends=(
  alsa-lib
  alsa-plugins
  gnutls
  gst-plugins-bad
  gst-plugins-base
  gst-plugins-base-libs
  gst-plugins-good
  gst-plugins-ugly
  libpulse
  libxcomposite
  opencl-icd-loader
  sdl2
  wine-gecko
  wine-mono
)
provides=("wine-staging" "wine" 'wine-wow64')
conflicts=("wine")
makedepends=(${makedepends[@]} ${depends[@]})
install=wine.install

pkgver() {
  git -C wine describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^wine.//;s/^v//;s/\.rc/rc/'
}

prepare() {
  # Get rid of old build dirs
  rm -rf "$pkgname-build"
  mkdir "$pkgname-build"

  cd wine

  # apply wine-staging patchset (no Esync to prevent conflicts with NTSync)
  ../wine-staging/staging/patchinstall.py --backend=git-apply --all \
    -W server-Signal_Thread \
    -W eventfd_synchronization

  # NTSync for Wine 10.1
  patch -Np1 -i "${srcdir}/ntsync-10.1-staging.patch"
  patch -Np1 -i "${srcdir}/include-use-ntsync.h-v7-module-header-as-an-in-tree-header.patch"

  # Use native Visual C++ DLLs, fix Windows product version
  patch -Np1 -i "${srcdir}/0001-HACK-wine.inf-Add-native-builtin-overrides-for-msvcr.patch"
  patch -Np1 -i "${srcdir}/0002-wine.inf-Set-a-valid-Win10-ProductId.patch"
  patch -Np1 -i "${srcdir}/0003-wineboot-On-prefix-upgrade-update-win10-build-number.patch"
  patch -Np1 -i "${srcdir}/0004-wineboot-Generate-better-DigitalProductId.patch"
  patch -Np1 -i "${srcdir}/0005-wineboot-Load-root-certificates-on-prefix-update.patch"

  # Fixes crashes in many games in new WoW64 mode
  # https://bugs.winehq.org/show_bug.cgi?id=57444
  patch -Np1 -i "${srcdir}/7064.patch"

  # Make keyboard shortcuts independent of layout
  # https://bugs.winehq.org/show_bug.cgi?id=30984
  patch -Np1 -i "${srcdir}/winex11.drv-Recognize-the-keyboard-in-a-locale-indep.patch"

  # Fixes losing input focus after Alt-Tab in Unity games
  patch -Np1 -i "${srcdir}/HACK-winex11.drv-Let-the-WM-focus-our-windows-by-def.patch"

  # Fixes "The explorer process failed to start" issue
  patch -Np1 -i "${srcdir}/Avoid-winemenubuilder-to-startup-explorer.exe.patch"

  ./dlls/winevulkan/make_vulkan
  ./tools/make_requests
  ./tools/make_specfiles
  autoreconf -f
}

build() {
  local -a split=($CFLAGS)
  local -A flags
  for opt in "${split[@]}"; do flags["${opt%%=*}"]="${opt##*=}"; done
  local march="${flags["-march"]:-"x86-64-v3"}"
  local mtune="${flags["-mtune"]:-"haswell"}"

  # Apply flags for cross-compilation (from Proton)
  export CFLAGS="-O3 -march=$march -mtune=$mtune -mfpmath=sse -fwrapv -fno-strict-aliasing -pipe -Wa,-muse-unaligned-vector-move"
  export CROSSCFLAGS="$CFLAGS"
  export CROSSCXXFLAGS="$CROSSCFLAGS"
  export CROSSLDFLAGS="-Wl,-O1"
  export LDFLAGS="-Wl,-O1,--sort-common,--as-needed"

  echo "Building Wine..."
  cd "$pkgname-build"
  ../wine/configure \
    --disable-tests \
    --disable-win16 \
    --prefix=/usr \
    --libdir=/usr/lib \
    --with-x \
    --with-wayland \
    --with-gstreamer \
    --with-ffmpeg \
    --without-oss \
    --without-sane \
    --without-v4l2 \
    --without-cups \
    --without-gphoto \
    --without-xinerama \
    --without-pcsclite \
    --without-xxf86vm \
    --without-pcap \
    --enable-archs=x86_64,i386

  make
}

package() {
  cd "$pkgname-build"
  make prefix="$pkgdir/usr" \
    libdir="$pkgdir/usr/lib" \
    dlldir="$pkgdir/usr/lib/wine" install

  # Strip Windows binaries
  i686-w64-mingw32-strip --strip-debug "$pkgdir"/usr/lib/wine/i386-windows/*.dll
  x86_64-w64-mingw32-strip --strip-debug "$pkgdir"/usr/lib/wine/x86_64-windows/*.dll

  # Font aliasing settings for Win32 applications
  install -d "$pkgdir"/usr/share/fontconfig/conf.{avail,default}
  install -m644 "$srcdir/30-win32-aliases.conf" "$pkgdir/usr/share/fontconfig/conf.avail"
  ln -s ../conf.avail/30-win32-aliases.conf "$pkgdir/usr/share/fontconfig/conf.default/30-win32-aliases.conf"
  install -Dm 644 "$srcdir/wine-binfmt.conf" "$pkgdir/usr/lib/binfmt.d/wine.conf"

  # NTSync additions
  echo "ntsync" | install -Dm644 /dev/stdin "$pkgdir/usr/lib/modules-load.d/wine-pure.conf"
  echo 'KERNEL=="ntsync", MODE="0644"' | install -Dm644 /dev/stdin "$pkgdir/usr/lib/udev/rules.d/50-wine-pure.rules"
}

# vim:set ts=8 sts=2 sw=2 et:
