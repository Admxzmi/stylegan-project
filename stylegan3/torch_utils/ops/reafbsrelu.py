import torch
import torch.nn.functional as F

def reafbsrelu(x, alpha=0.1):
    alpha_tensor = torch.tensor(alpha, dtype=x.dtype, device=x.device)
    prelu = F.prelu(x, alpha_tensor)
    A = F.prelu(3 * prelu - 1, alpha_tensor)
    B = F.prelu(2 * prelu - 2, alpha_tensor)
    D = F.prelu(-1 * prelu - 0.2, alpha_tensor)
    return alpha * (A + B + D)

