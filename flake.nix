{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };
  outputs = {nixpkgs, ...}: let
    forAllSystems = f:
      nixpkgs.lib.genAttrs nixpkgs.lib.systems.flakeExposed (system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in
        f pkgs);
  in {
    packages = forAllSystems (pkgs: {
      formatter = pkgs.alejandra;
    });

    devShells = forAllSystems (pkgs: {
      default = pkgs.mkShell {
        packages = with pkgs; [
          nodejs
          bun
          git
          biome
        ];

        BIOME_BINARY = "${pkgs.biome}/bin/biome";

        shellHook = ''
            echo "dev env started"
            fish && echo "exit dev env" && exit
        '';
      };
    });
  };
}
