export class Pipe {
    description: string;
    horizontal_change: number;
    vertical_change: number;
    inner_diamter: number;
    roughness: number;
    cores: number;
    constructor(index_no: number) {
        this.description = pipes[index_no].description;
        this.horizontal_change = pipes[index_no].horizontal_change;
        this.vertical_change = pipes[index_no].vertical_change;
        this.inner_diamter = pipes[index_no].inner_diamter;
        this.roughness = pipes[index_no].roughness;
        this.cores = pipes[index_no].cores;
    }
}

export const pipes = [
    {
      description: "3/8\" topsides tubing",
      horizontal_change: 110,
      vertical_change: 0,
      inner_diamter: 5.17,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "Umbilical Riser",
      horizontal_change: 817,
      vertical_change: 600,
      inner_diamter: 19.1,
      roughness: 0.002,
      cores: 1
    },
    {
      description: "SDU Piping",
      horizontal_change: 7,
      vertical_change: 0,
      inner_diamter: 11.6,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "SDU Piping",
      horizontal_change: 31,
      vertical_change: 0,
      inner_diamter: 14.23,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "From SDU to FPSO towhead",
      horizontal_change: 240,
      vertical_change: 235,
      inner_diamter: 19.1,
      roughness: 0.002,
      cores: 1
    },
    {
      description: "FPSO towhead piping",
      horizontal_change: 20,
      vertical_change: 0,
      inner_diamter: 14.23,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "Bundle",
      horizontal_change: 2000,
      vertical_change: 100,
      inner_diamter: 19.1,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "Template towhead piping",
      horizontal_change: 2000,
      vertical_change: -100,
      inner_diamter: 14.23,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "Template towhead to manifold",
      horizontal_change: 200,
      vertical_change: 100,
      inner_diamter: 19.1,
      roughness: 0.002,
      cores: 1
    },
    {
      description: "Manifold Piping",
      horizontal_change: 10,
      vertical_change: 0,
      inner_diamter: 11.66,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "Tree piping",
      horizontal_change: 10,
      vertical_change: 0,
      inner_diamter: 6.23,
      roughness: 0.015,
      cores: 1
    },
    {
      description: "Downhole tubing",
      horizontal_change: 300,
      vertical_change: 300,
      inner_diamter: 6.23,
      roughness: 0.015,
      cores: 1
    }
  ];
